import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../../state";

export default function SuggestionPresenter() {
  const orderType = useRecoilValue(orderSelectState);

  useEffect(() => {
    console.log("order-type", orderType);
  }, []);
  return <div>Suggestion</div>;
}
