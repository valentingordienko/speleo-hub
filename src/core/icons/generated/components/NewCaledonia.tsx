import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NewCaledonia.svg';

export function NewCaledonia(props: TBaseProps) {
  return (
    <Icon {...props} name="NewCaledonia">
      <SVG />
    </Icon>
  );
}
