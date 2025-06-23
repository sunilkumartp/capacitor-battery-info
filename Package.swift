// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorBatteryInfo",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorBatteryInfo",
            targets: ["BatteryInfoPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "BatteryInfoPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/BatteryInfoPlugin"),
        .testTarget(
            name: "BatteryInfoPluginTests",
            dependencies: ["BatteryInfoPlugin"],
            path: "ios/Tests/BatteryInfoPluginTests")
    ]
)