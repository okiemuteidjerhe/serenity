import BackArrow from "../components/BackArrow";

import styles from "../styles/CompPayment.module.css";

import ContentForm from "../components/ContentForm";

const data = [
  {
heading: "Free Basic Plan",
subheading: "Individuals exploring the platform",
cost: 0,
features: [
  "Daily mood check-ins & mental health journaling",
  "Limited Virtual Safe Room access",
  "Access to select mental health guides & articles",
  "Group therapy session access",
  "1 monthly support chat session"
],
buttonText: "Get Started Free"
  },
  {
heading: "Plus Plan",
subheading: "Individuals wanting wellness access",
cost: 10 ,
features: [
  "Full access to Virtual Safe Room (meditation, breathing tools, therapist booking)",
  "Full journaling & mood history tracking",
  "1-on-1 therapist session",
  "1 monthly support chat session"
],
buttonText: "Get Plus Plan"
  },
  {
heading: "Premium Plan",
subheading: "Individuals seeking support & personalized care.",
cost: 18,
features: [
  "4 therapy sessions per month.",
  "Full access Virtual Safe Room.",
  "Full journaling & mood history tracking",
  "4 monthly support chat session"
],
buttonText: "Get Premium Plan"
  },
]
export default function IndividualPayment() {

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
  return (
    <div className={styles.body}>
      <BackArrow linkTo="/register/questions" />

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
