import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NewCaledonia.svg';

export function NewCaledonia(props: TProps) {
  return (
    <Icon {...props} name="NewCaledonia">
      <SVG />
    </Icon>
  );
}
