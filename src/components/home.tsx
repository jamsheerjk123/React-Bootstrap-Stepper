import Stepper from "./stepper";

const Home=()=>{
    const labels = ['01','02','03','04','05']
    return (<>
        <Stepper  active={2} label={labels} 
            stepperBgColor={'bg-danger'} stepperBgColorActive={'bg-primary'} stepperBorder={'border-primary'} 
            connectorBorderColor={'bg-primary'}  connectorBorderWidth = {'border-1'} />
    </>)
}

export default Home