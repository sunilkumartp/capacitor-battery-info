export interface BatteryInfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
export interface BatteryInfoResult {
  batteryLevel: number;
  isCharging: boolean;
}