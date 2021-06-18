import React from 'react'
import LoadingIllustration from '../assets/img/undraw_Loading_re_5axr.svg'
export default function LoadingPlaceholder() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="opacity-30">
        <img src={LoadingIllustration} className="w-4/5 animate-pulse" alt="" />
      </div>
    </div>
  )
}
