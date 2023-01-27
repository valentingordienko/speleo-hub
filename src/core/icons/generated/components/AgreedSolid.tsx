import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AgreedSolid.svg';

export function AgreedSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AgreedSolid">
      <SVG />
    </Icon>
  );
}
