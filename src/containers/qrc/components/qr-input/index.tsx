import { debounce } from "lodash";
import { useCallback } from "react";

import { Input } from "@/components/ui/input";

import { setIsTyping, setText, useAppDispatch } from "../../redux";

type IProps = {
  id?: string;
};

export const QRInput = ({ id }: IProps) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((text: string) => {
      dispatch(setText(text));
    }, 500),
    []
  );

  return (
    <Input
      className="dark:bg-slate-800 dark:ring-offset-slate-800"
      id={id}
      onChange={(e) => {
        dispatch(setIsTyping(true));
        handleChange(e.target.value);
      }}
      placeholder="https://qrc.io.vn"
    />
  );
};
