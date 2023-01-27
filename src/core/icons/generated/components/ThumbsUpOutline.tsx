import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsUpOutline.svg';

export function ThumbsUpOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ThumbsUpOutline">
      <SVG />
    </Icon>
  );
}
