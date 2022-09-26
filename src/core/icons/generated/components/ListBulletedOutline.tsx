import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListBulletedOutline.svg';

export function ListBulletedOutline(props: TProps) {
  return (
    <Icon {...props} name="ListBulletedOutline">
      <SVG />
    </Icon>
  );
}
