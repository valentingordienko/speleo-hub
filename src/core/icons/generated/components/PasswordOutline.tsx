import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PasswordOutline.svg';

export function PasswordOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PasswordOutline">
      <SVG />
    </Icon>
  );
}
