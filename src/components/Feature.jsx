import InfoForm from "./InfoForm";
import styles from "../styles/Feature.module.css"

export default function Feature(props){
    return(
        <InfoForm>
            <div className={styles.rpg}>
                          <h2>{props.featureHeading}</h2>
                          <p>
                            {props.information}
                          </p>
                          <div className={styles.fImg}>
                            <img src={props.src} alt={props.alt} />
                          </div>
                        </div>
        </InfoForm>
    )
}