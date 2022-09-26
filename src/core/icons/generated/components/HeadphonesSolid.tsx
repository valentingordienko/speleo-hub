import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeadphonesSolid.svg';

export function HeadphonesSolid(props: TProps) {
  return (
    <Icon {...props} name="HeadphonesSolid">
      <SVG />
    </Icon>
  );
}
