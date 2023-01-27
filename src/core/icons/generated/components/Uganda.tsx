import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Uganda.svg';

export function Uganda(props: TBaseProps) {
  return (
    <Icon {...props} name="Uganda">
      <SVG />
    </Icon>
  );
}
