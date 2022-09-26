import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Uganda.svg';

export function Uganda(props: TProps) {
  return (
    <Icon {...props} name="Uganda">
      <SVG />
    </Icon>
  );
}
