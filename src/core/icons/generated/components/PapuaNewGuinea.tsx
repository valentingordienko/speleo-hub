import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PapuaNewGuinea.svg';

export function PapuaNewGuinea(props: TProps) {
  return (
    <Icon {...props} name="PapuaNewGuinea">
      <SVG />
    </Icon>
  );
}
