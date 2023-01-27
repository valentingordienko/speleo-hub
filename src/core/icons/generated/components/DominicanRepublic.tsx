import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DominicanRepublic.svg';

export function DominicanRepublic(props: TBaseProps) {
  return (
    <Icon {...props} name="DominicanRepublic">
      <SVG />
    </Icon>
  );
}
