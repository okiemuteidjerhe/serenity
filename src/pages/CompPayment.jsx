import BackArrow from "../components/BackArrow";

import styles from "../styles/CompPayment.module.css";

import ContentForm from "../components/ContentForm";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthReducerContext } from "../context/AuthContext";


const data = [
  {
    heading: "Professional Plan",
    subheading: "Ideal for Growing teams or Midsize companies",
    cost: 35,
    features: [
      "Full Company Mental Health Dashboard",
      "Unlimited mood check-ins & journaling",
      "Unlimited wellness programs & scheduling",
      "Group therapy session access",
      "Mental health leave request tracking",
      "Virtual Safe Room"],
    buttonText: "Get Professional Plan"
  },
  {
    heading: "Enterprise Plan",
    subheading: "Ideal for Large companies",
    cost: 60,
    features: [
      "Includes all Professional features",
      "Unlimited therapist bookings",
      "Monthly usage reports & quarterly wellness reports",
      "Premium support (24/7 Responds)",
      "1-on-1 therapist sessions (for employees)"
    ],
    buttonText: "Get Enterprise Plan"
  }
]

export default function CompPayment() {
  const location = useLocation()
  const form = location.state
  const dispatch = useContext(AuthReducerContext)

  console.log(form)

  async function handleFinalSubmit(formData) {
    const payment = Object.fromEntries(formData)
    const company_work_environment = {environ: "Hybrid"}
    const company_challenges = ["Sleep"]
    const register_info = { ...form, ...payment, company_challenges, company_work_environment }
    console.log(register_info)

    console.log('sending request')

    try{
      const response = await fetch("https://vivianmukhongo.pythonanywhere.com/api/core/user/", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(register_info)
      })

      const data = await response.json()
      console.log(data)
      dispatch({
      type:true,
      token: data
    })
    } catch(error){
      console.log(error)
    }

  }


  const content = data.map(datum => {
    return (
      <ContentForm
        key={datum.heading}
        heading={datum.heading}
        subheading={datum.subheading}
        cost={datum.cost.toFixed(2)}
        features={datum.features}
        buttonText={datum.buttonText}
        action={handleFinalSubmit}
      />
    )
  })

  return (
    <div className={styles.body}>
      <BackArrow linkTo="/signupnext" />
      <div className={styles.pagination}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <section className={styles.sectionF}>
        {content}
      </section>
    </div>
  );
}
