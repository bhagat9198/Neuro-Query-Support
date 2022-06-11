import React from 'react'
import UIImageSelectorStyle from './UIImageSelector.module.css'

function UIImageSelector({ label, value, setValue, onChange }) {
  return (
    <div>
      {!value[0] ?
        <div className={UIImageSelectorStyle.container}>
          <label for="file-upload">
            <span className={UIImageSelectorStyle.uploadImageButton}>Upload Image</span>
            <input id="file-upload" name="file-upload" type="file" accept="image/x-png,image/gif,image/jpeg" className={UIImageSelectorStyle.label} onChange={onChange} />
          </label>
        </div> : <div className={UIImageSelectorStyle.previewImageContainer}>
          <label for="file-upload">
            <img src={URL.createObjectURL(value[0])} className={UIImageSelectorStyle.imageDisplay} />
            <input id="file-upload" name="file-upload" type="file" accept="image/x-png,image/gif,image/jpeg" className={UIImageSelectorStyle.label} onChange={onChange} />
          </label>
        </div>
      }
    </div>
  )
}

export default UIImageSelector