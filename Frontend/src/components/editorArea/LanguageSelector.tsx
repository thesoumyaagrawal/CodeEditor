import React, { useMemo } from "react";
import type { MenuProps } from "antd";
import { Dropdown} from "antd";
import { LANGUAGES } from "../../constants/languages";

type Props = {
  language: string;
  onSelect: (langKey: string) => void;
};

const LanguageSelector: React.FC<Props> = ({ language, onSelect }) => {
  const currentLabel = useMemo(() => {
    const lang = LANGUAGES.find((l) => l.key === language);
    return lang ? `${lang.label} (${lang.version})` : "Select Language";
  }, [language]);

  const items: MenuProps["items"] = useMemo(
    () =>
      LANGUAGES.map((l) => ({
        key: l.key,
        label: `${l.label} (${l.version})`,
      })),
    []
  );

  const onClick: MenuProps["onClick"] = ({ key }) => {
    onSelect(String(key)); 
  };

  return (
    <Dropdown menu={{ items, onClick }} placement="bottomLeft" trigger={["click"]}>
    {currentLabel}
    </Dropdown>
  );
};

export default LanguageSelector;
