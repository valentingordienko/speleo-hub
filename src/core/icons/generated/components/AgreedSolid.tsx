import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AgreedSolid.svg';

export function AgreedSolid(props: TProps) {
  return (
    <Icon {...props} name="AgreedSolid">
      <SVG />
    </Icon>
  );
}
