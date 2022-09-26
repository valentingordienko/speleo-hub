import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListNumberedOutline.svg';

export function ListNumberedOutline(props: TProps) {
  return (
    <Icon {...props} name="ListNumberedOutline">
      <SVG />
    </Icon>
  );
}
