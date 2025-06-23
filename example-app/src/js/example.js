import { BatteryInfo } from 'capacitor-battery-info';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    BatteryInfo.echo({ value: inputValue })
}
