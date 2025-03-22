import {Editor} from "@tinymce/tinymce-react";
import {Controller} from 'react-hook-form'
import PropTypes from 'prop-types';
//Editor: This is a component from TinyMCE (a rich text editor) used to create a WYSIWYG
//  (What You See Is What You Get) editor. It's useful for formatting 
// text like in Word or Google Docs.

export default function RTE({name , control , label, defaultValue= ""}){
 return(
    <div>
        {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        <Controller
        name= {name || "content"}
        control = {control}
        render = {({field : {onChange}})=>{
          <Editor
            initialValue ={defaultValue}
            init = {{
                initialValue : defaultValue,
                    height : 500,
                    menuber:true,
                    plugins :[
                        "image",
                        "advlist",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                       "anchor",
                    ],
                    toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}"
                }}
                onEditorChange={onChange}
          />
        }}
        />
    </div>
 )
}

RTE.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string
};

