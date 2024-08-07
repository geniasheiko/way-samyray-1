import React from "react";
import styles from "./FormsControls.module.css";

// //создали новую компоненту
// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
//         <div>
//             <textarea {...input} {...props} />
//         </div>
//           { hasError && <span>"meta.error"</span> }
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
//         <div>
//             <input {...input} {...props} />
//         </div>
//           { hasError && <span>"meta.error"</span> }
//         </div>
//     )
// }

const formControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
return (
    <div className={styles.formControl + "" + (hasError ? styles.error : "")}>
    <div>
    {props.children}
    </div>
    { hasError && <span>{meta.error}</span>}
    </div>
)
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}