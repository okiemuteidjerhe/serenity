import BackArrow from "../components/BackArrow";

import styles from "../styles/CompPayment.module.css";

import ContentForm from "../components/ContentForm";


const data = [
  {heading:"Professional Plan",
    subheading: "Ideal for Growing teams or Midsize companies",
    cost: 35,
    features: [
      "Full Company Mental Health Dashboard",
      "Unlimited mood check-ins & journaling" ,
      "Unlimited wellness programs & scheduling", 
      "Group therapy session access", 
      "Mental health leave request tracking", 
      "Virtual Safe Room"],
    buttonText: "Get Professional Plan"
  },
  {heading:"Enterprise Plan",
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
const content = data.map(datum=>{
  return (
    <ContentForm
    key={datum.heading}
    heading={datum.heading}
    subheading={datum.subheading}
    cost={datum.cost.toFixed(2)}
    features={datum.features}
    buttonText={datum.buttonText}
    />
  )
})
export default function CompPayment() {
  return (
    <div className={styles.body}>
      <BackArrow linkTo="/register/signupnext" />
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
