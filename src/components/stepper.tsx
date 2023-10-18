import { Fragment } from "react"
interface IStepperProps{
    active:number,
    label:string[],
    stepperBgColor:string,
    stepperBgColorActive:string,
    stepperBorder:string,
    connectorBorderColor:string,
    connectorBorderWidth:string,
}
const Stepper = ({  active,
                    label,
                    stepperBgColor,
                    stepperBgColorActive,
                    stepperBorder,
                    connectorBorderColor}
                    :IStepperProps
                )=>{
    const steps =label.slice(2)

    return(<>
        <div className="d-flex flex-row">
            <div className={`p-2 border text-white ${ active >= 0? stepperBgColorActive:stepperBgColor} ${stepperBorder}`}>01</div>
            <hr className={`my-auto border border-1 ${connectorBorderColor} opacity-100`} style={{width:'3rem'}}/>
            <div className={`p-2 border text-white ${ active >= 0? stepperBgColorActive:stepperBgColor} ${stepperBorder}`} >02</div>
            {steps.map((step,index)=>{
                return(
                    <Fragment key={index}>
                        <hr className={`my-auto border border-1 ${connectorBorderColor} opacity-100`} style={{width:'3rem'}}/>
                        <div className={`p-2 border text-white ${ active >= index+2? stepperBgColorActive:stepperBgColor} ${stepperBorder}`} >{step}</div>
                    </Fragment>)
            })}
        </div>
    </>)
    
}
export default Stepper