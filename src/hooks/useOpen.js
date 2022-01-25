import { useState } from "react";

const useOpen = (initOpen = false) => {
  const [open, setOpen] = useState(initOpen);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen((prevOpen) => !prevOpen);

  return { open, onOpen, onClose, onToggle };
};

export default useOpen;
