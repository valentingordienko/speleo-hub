import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ListNumberedOutline.svg';

export function ListNumberedOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ListNumberedOutline">
      <SVG />
    </Icon>
  );
}
