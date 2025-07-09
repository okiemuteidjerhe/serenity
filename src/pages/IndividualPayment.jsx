import BackArrow from "../components/BackArrow";

import styles from "../styles/CompPayment.module.css";

import ContentForm from "../components/ContentForm";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthReducerContext } from "../context/AuthContext";
import { UserDispatchContext } from "../context/UserInfoContext";

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
    cost: 10,
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
  const location = useLocation();
  const form = location.state
  const dispatch = useContext(AuthReducerContext)
  const userDispatch =  useContext(UserDispatchContext)

  console.log(form)

  async function handleFinalSubmit(formData) {
    const payment = Object.fromEntries(formData)
    const registerInfo = { ...form, ...payment, mood: "happy" }
    console.log(registerInfo)
console.log("Sending request")

    const response = await fetch("https://vivianmukhongo.pythonanywhere.com/api/core/user/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(registerInfo)
    })
    
    const data = await response.json()
    console.log(data)
    /* const {user, token} = data
    console.log(user , token) */
    
    dispatch({
      type: true,
      token: {token: data.token}
    })

    userDispatch({
      type: update_user,
      user: data.user
    })
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
      <BackArrow linkTo="/questions" />

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
