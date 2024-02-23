import GoogleMap from "../../components/GoogleMap";
import storesData from "../../data/storeData.json";
import StoreInfo from "../../components/storeInfo";

const storePage = () => {
  const stores = storesData;
  return (
    <>
      <GoogleMap />
      store
      {stores.map((item, index) => (
        <StoreInfo
          name={item.name}
          latitude={item.latitude}
          longitude={item.longitude}
        ></StoreInfo>
      ))}
    </>
  );
};

export default storePage;
