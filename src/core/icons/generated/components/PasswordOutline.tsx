import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PasswordOutline.svg';

export function PasswordOutline(props: TProps) {
  return (
    <Icon {...props} name="PasswordOutline">
      <SVG />
    </Icon>
  );
}
