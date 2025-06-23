export interface BatteryInfoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
