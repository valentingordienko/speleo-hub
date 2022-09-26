import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CoteDIvoire.svg';

export function CoteDIvoire(props: TProps) {
  return (
    <Icon {...props} name="CoteDIvoire">
      <SVG />
    </Icon>
  );
}
