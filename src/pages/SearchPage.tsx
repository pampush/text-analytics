import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../redux';
import Notification from '../components/Notification';
import ResultBox from '../components/ResultBox';
import SearchBox from '../components/SearchBox';

function SearchPage() {
  const [openNotification, setOpenNotification] = React.useState<boolean>(false);
  const errors = useSelector((state: AppState) => state.texts.errors);

  React.useEffect(() => {
    if (errors.length) setOpenNotification(true);
  }, [errors]);

  console.log('page', openNotification);

  return (
    <>
      <section className="search">
        <SearchBox />
      </section>
      <section className="cards">
        <ResultBox />
      </section>
      <Notification
        open={openNotification}
        message={errors}
        autoHideDuration={5000}
        onClose={() => setOpenNotification(false)}
      />
    </>
  );
}

export default SearchPage;
