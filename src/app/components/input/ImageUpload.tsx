"use client" 

import { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from 'react-icons/tb'

import React from 'react'
import Image from 'next/image'

declare global {
    var cloudinary: any
}

type ImageUploadProps = {
    onChange: (value: string) => void
    value: string
    onUpload?: (handleUpload: string) => void

}

type UploadResult = {
    info: {
        secure_url: string
        
    }

}


// function isValidUploadResult(result:any): result is UploadResult {
//     return 'info' in result && result.info !== null && 'success_url' in result.info && typeof result.info.secure_url === 'string';
//   }

//   function isValidUploadResult(result:any): result is UploadResult {
//     // 'success_url' を 'secure_url' に修正
//     return 'info' in result && result.info !== null && 'secure_url' in result.info && typeof result.info.secure_url === 'string';
// }  
  
//　画像アップロード


const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value,onUpload}) => {

    const handleUpload = useCallback((result: UploadResult) => {
        // if (isValidUploadResult(result)) {
            console.log(result.info.secure_url);
            onChange(result.info.secure_url);
        //   }
    },[onChange])

  return (
    <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{
            maxFiles: 1,
            sources: ['local']
        }}
    >
        {({ open }) => {
            return (
                <div
                    onClick={() => open?.()}
                    className=' relative flex h-80 cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 transition hover:opacity-70'
                >
                    <TbPhotoPlus size={50} />
                    <div className=' text-sm font-semibold'>画像アップロード</div>

                    {value && (
                        <div className=' absolute inset-0 h-full w-full'>
                            <Image src={value} className=' object-cover' alt='image' fill />
                        </div>
                    )}
                </div>
            )
        }}

    </CldUploadWidget>
  )
}

export default ImageUpload