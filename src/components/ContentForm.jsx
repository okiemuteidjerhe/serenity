import InfoForm from "./InfoForm"
import styles from '../styles/ContentForm.module.css'
import { IoMdCheckmark } from "react-icons/io"

export default function ContentForm(props){

    function handleChange(e){
        if(e.target.checked){
            e.target.form.requestSubmit();
        }
    }

    return(
        <InfoForm>
<form action={props.action} className={styles.formCnt}>
            <div className={styles.info}>
                
                <div className={styles.con}>
                      <h2 className={styles.head}>{props.heading}</h2>
                      <p className={styles.pa}>{props.subheading}</p>
                    </div>
                    <h1 className={styles.num}>${props.cost}</h1>
                <div className={styles.checks}>
                    {props.features.map(feature=>{
                        return (
                    <div className={styles.cont} key={feature}>
                          <IoMdCheckmark size={18} fontWeight={400} />
                          <p className={styles.pa}>{feature}</p>

                        </div>
                        )
                    }
                )}
                
                </div>
            </div>
            <label className={styles.hidCheck}> <input type="checkbox" onChange={handleChange} name="paymentType" value={props.heading}/>
            <div className={styles.hidCheckText}>{props.buttonText}</div>   
            </label>
          </form>
        </InfoForm>
    )
}