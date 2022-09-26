import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DominicanRepublic.svg';

export function DominicanRepublic(props: TProps) {
  return (
    <Icon {...props} name="DominicanRepublic">
      <SVG />
    </Icon>
  );
}
