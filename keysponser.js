import React from "react";
import { View, Text } from "react-native";
import HsmSvg from "../../../assets/vendors/hms.svg";
import ApnewalaSvg from "../../../assets/vendors/apnewala.svg";
import HotelKeySvg from "../../../assets/vendors/hk.svg";
import HBOSvg from "../../../assets/vendors/hbo.svg";
import HDSupplySvg from "../../../assets/vendors/hdsupply.svg";
import AmazonSvg from "../../../assets/vendors/amazon.svg";
import { Typography } from "../Typography";

export default function KeySponsors() {
  return (
    <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
      <Typography.Label
        color="#FFFFFF"
        fontSize={16}
        fontWeight="600"
        marginBottom={12}
      >
        OUR KEY SPONSORS
      </Typography.Label>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{ fontWeight: "700", marginBottom: 10, textAlign: "center" }}
        >
          DIAMOND SPONSOR
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <HsmSvg width={100} height={40} />
          < HDSupplySvg width={100} height={40} />

          {/* <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#141D2E",
            }}
          >
            HD Supply
          </Text> */}
        </View>

        <View
          style={{ height: 1, backgroundColor: "#141D2E", marginVertical: 16 }}
        />

        <Text
          style={{ fontWeight: "700", marginBottom: 10, textAlign: "center" }}
        >
          PLATINUM SPONSOR
        </Text>
        <View style={{ alignItems: "center" }}>
          <ApnewalaSvg width={120} height={40} />
        </View>

        <View
          style={{ height: 1, backgroundColor: "#141D2E", marginVertical: 16 }}
        />

        <Text
          style={{ fontWeight: "700", marginBottom: 10, textAlign: "center" }}
        >
          GOLD SPONSOR
        </Text>
        <View style={{ alignItems: "center" }}>
          <HotelKeySvg width={120} height={40} />
        </View>

        <View
          style={{ height: 1, backgroundColor: "#141D2E", marginVertical: 16 }}
        />

        <Text
          style={{ fontWeight: "700", marginBottom: 10, textAlign: "center" }}
        >
          SILVER SPONSOR
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <HBOSvg width={90} height={40} />
          <AmazonSvg width={100} height={40} />
          {/* <Text style={{ fontWeight: "600", fontSize: 16, color: "#141D2E" }}>
            Amazon
          </Text> */}
        </View>
      </View>
    </View>
  );
}
