import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

interface IprovAuto {
    id : number,
    name : string,
    created_at : string,
    updated_at : string,

}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function ProvienceSearch() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly IprovAuto[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...AllProviences]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo2"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="استان مورد نظر؟؟"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}





const AllProviences = [
    {
        "id": 1,
        "name": "آذربايجان شرقي",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 2,
        "name": "آذربايجان غربي",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 3,
        "name": "اردبيل",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 4,
        "name": "اصفهان",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 5,
        "name": "البرز",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 6,
        "name": "ايلام",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 7,
        "name": "بوشهر",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 8,
        "name": "تهران",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 9,
        "name": "چهارمحال بختياري",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 10,
        "name": "خراسان جنوبي",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 11,
        "name": "خراسان رضوي",
        "created_at": "2022-06-21 14:28:05",
        "updated_at": "2022-06-21 14:28:05"
    },
    {
        "id": 12,
        "name": "خراسان شمالي",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 13,
        "name": "خوزستان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 14,
        "name": "زنجان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 15,
        "name": "سمنان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 16,
        "name": "سيستان و بلوچستان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 17,
        "name": "فارس",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 18,
        "name": "قزوين",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 19,
        "name": "قم",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 20,
        "name": "كردستان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 21,
        "name": "كرمان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 22,
        "name": "كرمانشاه",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 23,
        "name": "كهكيلويه و بويراحمد",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 24,
        "name": "گلستان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 25,
        "name": "گيلان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 26,
        "name": "لرستان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 27,
        "name": "مازندران",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 28,
        "name": "مركزي",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 29,
        "name": "هرمزگان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 30,
        "name": "همدان",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    },
    {
        "id": 31,
        "name": "يزد",
        "created_at": "2022-06-21 14:28:06",
        "updated_at": "2022-06-21 14:28:06"
    }
]