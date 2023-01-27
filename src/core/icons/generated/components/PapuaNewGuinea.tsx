import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PapuaNewGuinea.svg';

export function PapuaNewGuinea(props: TBaseProps) {
  return (
    <Icon {...props} name="PapuaNewGuinea">
      <SVG />
    </Icon>
  );
}
