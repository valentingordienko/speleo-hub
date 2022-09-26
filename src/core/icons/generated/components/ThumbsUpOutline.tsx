import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThumbsUpOutline.svg';

export function ThumbsUpOutline(props: TProps) {
  return (
    <Icon {...props} name="ThumbsUpOutline">
      <SVG />
    </Icon>
  );
}
