import { Link } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [b, setB] = useState(1);
  const c = 2;
  const a = useMemo(() => {
    return b + c;
  }, [b, c]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <text className="text-2xl font-bold my-10 font-rubik">
        Welcome to ExpoReState
      </text>
      <view className="my-5 flex justify-around flex-row w-full">
        <Link href="/sign-in"> sign in </Link>
        <Link href="/explore"> Explore </Link>
        <Link href="/profile"> Profile </Link>
        <Link href="/properties/1"> properties </Link>
      </view>
    </View>
  );
}
