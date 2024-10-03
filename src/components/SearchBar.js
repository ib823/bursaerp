import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

function SearchBar({ searchTerm, setSearchTerm, onClose }) {
  const classes = useStyles();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClose();
    }
  };

  return (
    <TextField
      className={classes.searchField}
      variant="outlined"
      placeholder="Search processes..."
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;