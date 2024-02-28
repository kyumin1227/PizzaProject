import GoogleMap from "../../components/GoogleMap";
import storesData from "../../data/storeData.json";
import StoreInfo from "../../components/storeInfo";

const storePage = () => {
  const stores = storesData;
  return (
    <>
      <GoogleMap />
      {stores.map((item, index) => (
        <StoreInfo
          name={item.name}
          latitude={item.latitude}
          longitude={item.longitude}
          url={item.url}
        ></StoreInfo>
      ))}
    </>
  );
};

export default storePage;
