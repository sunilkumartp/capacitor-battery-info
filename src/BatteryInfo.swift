import Foundation
import Capacitor

@objc(BatteryInfo)
public class BatteryInfo: CAPPlugin {
    @objc func getBatteryInfo(_ call: CAPPluginCall) {
        UIDevice.current.isBatteryMonitoringEnabled = true
        let level = UIDevice.current.batteryLevel
        let isCharging = UIDevice.current.batteryState == .charging || UIDevice.current.batteryState == .full
        let result = [
            "batteryLevel": Int(level * 100),
            "isCharging": isCharging
        ]
        call.resolve(result)
    }
}