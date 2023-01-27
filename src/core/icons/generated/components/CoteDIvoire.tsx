import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CoteDIvoire.svg';

export function CoteDIvoire(props: TBaseProps) {
  return (
    <Icon {...props} name="CoteDIvoire">
      <SVG />
    </Icon>
  );
}
