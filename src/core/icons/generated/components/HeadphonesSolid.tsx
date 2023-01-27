import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeadphonesSolid.svg';

export function HeadphonesSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="HeadphonesSolid">
      <SVG />
    </Icon>
  );
}
