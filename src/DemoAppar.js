import * as React from 'react';
import { Appbar } from 'react-native-paper';
const DemoAppar = () => {
  const _goBack = () => alert('Went back');

  const _handleSearch = () => alert('Searching');

  const _handleMore = () => alert('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default DemoAppar;