import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListBulletedOutline.svg';

export function ListBulletedOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ListBulletedOutline">
      <SVG />
    </Icon>
  );
}
