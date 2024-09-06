import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
  useTheme,
} from "@mui/material";
import { cartSchema } from "@/utils/validations/schema/cart";

const PizzaAddToCartForm = ({ pizza, open, toppings, bases, dismiss }) => {
  const [checkedToppings, setCheckedToppings] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cartSchema),
  });
  const onSubmit = (data) => console.log(data);

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleCheckboxChange = (event) => {
    console.log("Check event ", event);
    const { value, checked } = event.target;
    setCheckedToppings((prev) =>
      checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <p>{errors.firstName?.message}</p>

        <p>{errors.age?.message}</p>

        <input type="submit" />
        <Dialog
          open={open}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth={false} // Disable maxWidth to allow custom width
          sx={{ "& .MuiDialog-paper": { width: "60vw", maxWidth: "60vw" } }} // Set width to 75% of viewport width
        >
          <DialogTitle id="scroll-dialog-title">
            {pizza?.name} Pizza
          </DialogTitle>

          <Divider />

          <DialogContent dividers={scroll === "paper"}>
            <Box>
              <FormControl>
                <input {...register("age")} sx />

                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />

                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontWeight: "bold" }}
                >
                  Base
                </FormLabel>

                <RadioGroup row>
                  {bases.map((base, index) => (
                    <FormControlLabel
                      key={index}
                      value={base?.id}
                      control={<Radio />}
                      label={base?.name}
                    />
                  ))}
                </RadioGroup>

                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  Toppings
                </FormLabel>

                {toppings.map((topping, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        value={topping?.id}
                        checked={checkedToppings.includes(topping?.id)}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={`${topping?.name} - R${topping?.price}`}
                  />
                ))}
              </FormControl>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button
              variant="outlined"
              sx={{ bgcolor: useTheme().palette.grey[900], color: "white" }}
              onClick={() => {}}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{ bgcolor: useTheme().palette.success.main, color: "white" }}
              onClick={() => {}}
            >
              Add To Cart
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
};

export default PizzaAddToCartForm;
